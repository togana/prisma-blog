module.exports = {
    "extends": "airbnb",
    "rules": {
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [
        1,
        {
            "extensions": [
                ".js",
                ".jsx"
            ]
        }
    ],
    "jsx-a11y/anchor-is-valid": 0,
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