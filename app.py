from flask import Flask, url_for, session, redirect, render_template, request, flash
from authlib.integrations.flask_client import OAuth
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import os

app = Flask(__name__)

appConf = {
    "OAUTH2_CLIENT_ID": "331620799968-3gjse5gv2peqegc1br738p25e6afs7fm.apps.googleusercontent.com",
    "OAUTH2_CLIENT_SECRET": "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",
    "OAUTH2_META_URL": "https://accounts.google.com/.well-known/openid-configuration",
    "FLASK_SECRET": "01b1aba6-15ef-42de-a080-13a368c507bc",
    "FLASK_PORT": 5000,
    "SQLALCHEMY_DATABASE_URI": "sqlite:///app.db"
}

app.secret_key = appConf.get("FLASK_SECRET")
app.config['SQLALCHEMY_DATABASE_URI'] = appConf.get("SQLALCHEMY_DATABASE_URI")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

oauth = OAuth(app)

oauth.register("Dmarlearn",
               client_id=appConf.get("OAUTH2_CLIENT_ID"),
               client_secret=appConf.get("OAUTH2_CLIENT_SECRET"),
               server_metadata_url=appConf.get("OAUTH2_META_URL"),
               client_kwargs={
                   "scope": "openid profile email",
               }
               )

# Database Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(200))
    email = db.Column(db.String(200), unique=True)
    profile_pic = db.Column(db.String(200))
    premium = db.Column(db.Boolean, default=False)

# Create tables for db
def create_tables():
    with app.app_context():
        db.create_all()

# Routes
@app.route("/")
def home():
    user_info = session.get("user")
    return render_template("home.html", user_info=user_info)

@app.route("/courses")
def courses():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("courses.html")
    return render_template("coursesmain.html")

@app.route("/about_us")
def about_us():
    return render_template("about_us.html")

@app.route("/contact_us")
def contact_us():
    return render_template("contact_us.html")

@app.route("/hangman_game")
def game1():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("courses.html")
    return render_template("game1.html")

@app.route("/scramble_game")
def game2():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("courses.html")
    return render_template("game2.html")

# episode
@app.route("/episode_1")
def episode1():
    user_info = session.get("user")
    if user_info:
        return render_template("episode1.html")
    return redirect(url_for("googleLogin"))

@app.route("/episode_2")
def episode2():
    user_info = session.get("user")
    if user_info:
        return render_template("episode2.html")
    return redirect(url_for("googleLogin"))

@app.route("/episode_3")
def episode3():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("contact_us.html")
    return render_template("episode3.html")

@app.route("/episode_4")
def episode4():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("contact_us.html")
    return render_template("episode4.html")

@app.route("/episode_5")
def episode5():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("contact_us.html")
    return render_template("episode5.html")

@app.route("/episode_6")
def episode6():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("contact_us.html")
    return render_template("episode6.html")

@app.route("/episode_7")
def episode7():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("contact_us.html")
    return render_template("episode7.html")

@app.route("/episode_8")
def episode8():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("contact_us.html")
    return render_template("episode8.html")

@app.route("/episode_9")
def episode9():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("contact_us.html")
    return render_template("episode9.html")

@app.route("/episode_10")
def episode10():
    if not session.get("user") or not session['user']['userinfo']['premium']:
        return render_template("contact_us.html")
    return render_template("episode10.html")

################## above are pages #########################

# @app.route("/profile")
# def profile():
#     user_info = session.get("user")
#     if not user_info:
#         return redirect(url_for("home"))
    
#     user_data = user_info.get("userinfo")
#     return render_template("profile.html", user_data=user_data)

@app.route("/google-login")
def googleLogin():
    nonce = os.urandom(16).hex()
    session['nonce'] = nonce
    return oauth.Dmarlearn.authorize_redirect(redirect_uri=url_for("googleCallback", _external=True), nonce=nonce)

@app.route("/google-login-2")
def googleLogin2():
    user_info = session.get("user")
    if user_info:
        return redirect(url_for("contact_us"))
    return redirect(url_for("googleLogin"))

@app.route("/google-login-3")
def googleLogin3():
    user_info = session.get("user")
    if user_info:
        return '', 204
    return redirect(url_for("googleLogin"))

@app.route("/signin-google")
def googleCallback():
    token = oauth.Dmarlearn.authorize_access_token()
    nonce = session.pop('nonce', None)

    if nonce is None:
        return "Session expired. Please try again."

    user_info = oauth.Dmarlearn.parse_id_token(token, nonce=nonce)

    # Save the user in the database
    user = User.query.filter_by(email=user_info['email']).first()
    if not user:
        user = User(username=user_info['name'], email=user_info['email'], profile_pic=user_info['picture'])
        db.session.add(user)
        db.session.commit()

    # Update user data
    session["user"] = {
        "token": token,
        "userinfo": {
            "name": user.username,
            "email": user.email,
            "picture": user.profile_pic,
            "premium": user.premium
        }
    }
    return redirect(url_for("home"))

@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("home"))

@app.route("/admin", methods=["GET", "POST"])
def admin_login():
    if request.method == "POST":
        password = request.form.get("password")
        if password == "1q2w3e":
            session["admin"] = True
            return redirect(url_for("admin_dashboard"))
        else:
            flash("Invalid password", "danger")
    return render_template("admin_login.html")

@app.route("/admin/dashboard")
def admin_dashboard():
    if not session.get("admin"):
        return redirect(url_for("admin_login"))

    users = User.query.all()
    total_users = len(users)
    total_premium_users = len([user for user in users if user.premium])
    page = request.args.get('page', 1, type=int)
    per_page = 10
    paginated_users = User.query.paginate(page=page, per_page=per_page)
    return render_template("admin_dashboard.html", total_users=total_users, total_premium_users=total_premium_users, users=paginated_users)

@app.route("/admin/search", methods=["GET"])
def search_user():
    if not session.get("admin"):
        return redirect(url_for("admin_login"))

    email = request.args.get("email")
    user = User.query.filter_by(email=email).first()

    if user:
        return redirect(url_for("user_detail", user_id=user.id))
    else:
        flash("User not found", "danger")
        return redirect(url_for("admin_dashboard"))

@app.route("/admin/user/<int:user_id>", methods=["GET", "POST"])
def user_detail(user_id):
    if not session.get("admin"):
        return redirect(url_for("admin_login"))

    user = User.query.get_or_404(user_id)

    if request.method == "POST":
        if request.form.get("give_premium"):
            user.premium = True
            db.session.commit()
            flash("Premium access granted", "success")
        elif request.form.get("remove_premium"):
            user.premium = False
            db.session.commit()
            flash("Premium access removed", "success")
        elif request.form.get("delete_user"):
            db.session.delete(user)
            db.session.commit()
            flash("User deleted", "success")
            return redirect(url_for("admin_dashboard"))

        # Update session data of user
        if session.get("user") and session["user"]["userinfo"]["email"] == user.email:
            session["user"]["userinfo"]["premium"] = user.premium

    return render_template("user_detail.html", user=user)

@app.route("/admin/logout")
def admin_logout():
    session.pop("admin", None)
    return redirect(url_for("admin_login"))

if __name__ == "__main__":
    create_tables()  # Create the database tables when the app starts
    app.run(host="0.0.0.0", port=appConf.get("FLASK_PORT"), debug=False)
