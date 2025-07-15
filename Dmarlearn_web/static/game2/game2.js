const words = [
    "abandon", "abundant", "academic", "access", "accommodate", "accompany", "accumulate", 
    "accurate", "achieve", "acquire", "adapt", "adequate", "adjustment", "administer", 
    "advocate", "affect", "aggregate", "allocate", "alter", "alternative", "ambiguous", 
    "amend", "analogy", "analyze", "annual", "anticipate", "apparent", "applicable", 
    "appreciate", "approach", "appropriate", "approximate", "arbitrary", "area", "aspect", 
    "assemble", "assess", "assign", "assist", "assume", "attain", "attribute", "author", 
    "authority", "automate", "available", "aware", "benefit", "bias", "bond", "brief", 
    "bulk", "capable", "capacity", "category", "cease", "challenge", "channel", "chapter", 
    "chart", "circumstance", "civil", "clarify", "classic", "clause", "code", "coherent", 
    "coincide", "collapse", "colleague", "commence", "comment", "commission", "commit", 
    "commodity", "communicate", "community", "compatible", "compensate", "compile", 
    "complain", "complement", "complex", "component", "compound", "comprehensive", 
    "comprise", "compute", "conceive", "concentrate", "concept", "conclude", "concurrent", 
    "conduct", "confine", "confirm", "conflict", "conform", "consent", "considerable", 
    "consistent", "constant", "constitute", "constrain", "construct", "consult", 
    "consume", "contact", "contemporary", "context", "contract", "contradict", "contrast", 
    "contribute", "controversy", "convene", "converse", "convert", "convince", "cooperate", 
    "coordinate", "core", "corporate", "correspond", "create", "credit", "criteria", 
    "crucial", "culture", "currency", "cycle", "data", "debate", "decade", "declare", 
    "decline", "deduce", "define", "definite", "demonstrate", "deny", "depress", 
    "derive", "design", "despite", "detect", "deviate", "device", "diminish", "discrete", 
    "discriminate", "displace", "display", "dispose", "distinct", "distort", "distribute", 
    "diverse", "document", "domain", "domestic", "dominate", "draft", "duration", 
    "dynamic", "economy", "edit", "element", "eliminate", "emerge", "emphasis", 
    "empirical", "enable", "encounter", "energy", "enforce", "enhance", "enormous", 
    "ensure", "entity", "environment", "equate", "equip", "equivalent", "erode", 
    "establish", "estate", "estimate", "ethic", "evaluate", "eventually", "evidence", 
    "evolve", "exceed", "exclude", "exhibit", "expand", "expert", "explicit", "exploit", 
    "expose", "express", "extend", "external", "extract", "facilitate", "factor", 
    "feature", "federal", "file", "final", "finance", "finite", "flexible", "fluctuate", 
    "focus", "format", "formula", "forthcoming", "foundation", "framework", "function", 
    "fund", "fundamental", "furthermore", "generate", "generation", "global", "goal", 
    "grade", "grant", "guarantee", "guideline", "hence", "highlight", "hypothesis", 
    "identical", "identify", "ideology", "ignorant", "illustrate", "image", "impact", 
    "implement", "implicate", "implicit", "imply", "impose", "incentive", "incidence", 
    "incline", "income", "incorporate", "index", "indicate", "individual", "induce", 
    "inevitable", "infer", "infrastructure", "inherent", "initiate", "injure", 
    "innovate", "input", "insert", "insight", "inspect", "instance", "institute", 
    "instruct", "integral", "integrate", "integrity", "intelligent", "intense", 
    "interact", "intermediate", "internal", "interpret", "interval", "intervene", 
    "intrinsic", "invest", "investigate", "invoke", "involve", "isolate", "issue", 
    "item", "job", "journal", "justify", "label", "labor", "layer", "lecture", "legal", 
    "legislate", "levy", "liberal", "licence", "likewise", "link", "locate", "logic", 
    "maintain", "major", "manipulate", "manual", "margin", "mature", "maximize", 
    "mechanism", "mediate", "medical", "medium", "mental", "method", "migrate", 
    "military", "minimal", "minimize", "minimum", "ministry", "minor", "mode", 
    "modify", "monitor", "motivate", "mutual", "negate", "negotiate", "network", 
    "neutral", "nonetheless", "norm", "normal", "notion", "notwithstanding", 
    "nuclear", "objective", "obtain", "obvious", "occur", "occupy", "odd", "offset", 
    "ongoing", "option", "orient", "outcome", "output", "overall", "overlap", "overseas", 
    "panel", "paradigm", "paragraph", "parallel", "parameter", "participate", 
    "partner", "passive", "perceive", "percent", "period", "persist", "perspective", 
    "phase", "phenomenon", "philosophy", "physical", "plus", "policy", "portion", 
    "pose", "positive", "potential", "precede", "precise", "predict", "predominant", 
    "preliminary", "presume", "previous", "primary", "prime", "principle", "prior", 
    "priority", "proceed", "process", "professional", "prohibit", "project", 
    "promote", "proportion", "prospect", "protocol", "publication", "publish", 
    "purchase", "pursue", "qualitative", "quote", "radical", "random", "range", 
    "ratio", "rational", "react", "recovery", "refine", "regime", "region", 
    "register", "regulate", "reinforce", "reject", "relax", "release", "relevant", 
    "rely", "remove", "require", "research", "reside", "resolve", "resource", 
    "respect", "respond", "restore", "restrain", "restrict", "retain", "reveal", 
    "reverse", "revise", "revolution", "rigid", "role", "route", "scenario", 
    "schedule", "scheme", "scope", "section", "sector", "secure", "select", 
    "sequence", "series", "sex", "shift", "significant", "similar", "simulate", 
    "site", "so-called", "sole", "somewhat", "source", "specific", "specify", 
    "sphere", "stable", "statistic", "status", "straightforward", "strategy", 
    "stress", "structure", "style", "submit", "subsequent", "subsidy", "substitute", 
    "successor", "sufficient", "sum", "summary", "supplement", "survey", "survive", 
    "suspend", "sustain", "symbol", "tactic", "target", "task", "team", "technical", 
    "technique", "technology", "temporary", "tense", "terminate", "text", "theme", 
    "theory", "thereby", "thesis", "topic", "trace", "tradition", "transfer", 
    "transform", "transit", "transmit", "transport", "trend", "trigger", "ultimate", 
    "undergo", "underlie", "undertake", "uniform", "unify", "unique", "utilize", 
    "valid", "variable", "variation", "vehicle", "version", "via", "violate", "virtual"];
let scrambledWord = "";
let currentWord = "";
let score = 0;

function scrambleWord(word) {
    const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    return scrambled === word ? scrambleWord(word) : scrambled;
}

function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById('scrambled-word').textContent = scrambledWord;
    document.getElementById('feedback').textContent = "";
    document.getElementById('guess-input').value = "";
}

document.getElementById('submit-btn').addEventListener('click', function() {
    const userGuess = document.getElementById('guess-input').value.toLowerCase();
    if (userGuess === currentWord) {
        score++;
        document.getElementById('score').textContent = "Score: " + score;
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('popup-text').textContent = `Congrats! You got ${score} points`;
        document.getElementById('popup').style.display = "flex";
    }
});

document.getElementById('next-btn').addEventListener('click', newWord);

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = "none";
    score = 0;
    document.getElementById('score').textContent = "Score: " + score;
    newWord();
});

newWord();  // Initialize the first word

const snowflakes = document.querySelectorAll('.snowflake');

snowflakes.forEach(snowflake => {
    const size = Math.random() * 2 + 0.5;
    const pos = Math.random() * 100;
    const duration = Math.random() * 5 + 5;

    snowflake.style.fontSize = `${size}em`;
    snowflake.style.left = `${pos}vw`;
    snowflake.style.animationDuration = `${duration}s`;
});

