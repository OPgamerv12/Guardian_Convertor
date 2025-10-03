// Image mapping
const images = {
    diamond: { ingot: "images/Diamond.png", block: "images/Diamond_Block.png" },
    gold: { ingot: "images/Gold.png", block: "images/Gold_Block.png" },
    emerald: { ingot: "images/Emerald.png", block: "images/Emerald_Block.png" },
    netherite: { ingot: "images/Netherite.png", block: "images/Netherite_Block.png" }
};

// Update images dynamically
function updateFromImage() {
    let currency = document.getElementById("fromCurrency").value;
    let unit = document.getElementById("fromUnit").value;
    document.getElementById("fromImage").src = images[currency][unit];
}

function updateToImage() {
    let currency = document.getElementById("toCurrency").value;
    let unit = document.getElementById("toUnit").value;
    document.getElementById("toImage").src = images[currency][unit];
}

// Conversion logic
function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let toUnit = document.getElementById("toUnit").value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "<p>Please enter a valid number.</p>";
        return;
    }

    // Values in DIAMOND base
    const ingotValues = { diamond: 1, gold: 1/16, emerald: 1/9, netherite: 20 };
    const blockMultiplier = { ingot: 1, block: 9 };

    // Convert input to diamond base
    let diamondBase = amount * ingotValues[fromCurrency] * blockMultiplier[fromUnit];

    // Convert to target
    let result = diamondBase / ingotValues[toCurrency] / blockMultiplier[toUnit];

    // Show result with image
    document.getElementById("result").innerHTML = `
        <p>Result: <b>${result.toFixed(2)}</b> 
        <img src="${images[toCurrency][toUnit]}" width="24"> ${toUnit}(s)</p>
    `;
}

// Initialize images when page loads
updateFromImage();
updateToImage();
