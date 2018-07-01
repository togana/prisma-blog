module.exports = {
    "extends": "airbnb",
    "rules": {
    "import/prefer-default-export": 0
    },
    "overrides": [
        {
            "files": "src/index.js",
            "rules": {
                "no-console": 0
            }
        }
    ]
};