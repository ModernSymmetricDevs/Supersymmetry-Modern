// priority: 2147483647
const voltageTiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"];
const voltageTiersInt = [8, 32, 128, 512, 2048, 8192, 32768, 131072, 524288, 2097152, 8388608, 33554432, 134217728, 536870912, 2147483647];
const voltAmps = [7, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080, 7864320, 31457280, 125829120, 503316480, 2013265920];

const safeFluidOf = function(fluidId, amount) {
    if (Fluid.exists(fluidId)) {
        return Fluid.of(fluidId, amount);
    }
    const guessedModId = guessModId(fluidId, "fluid");
    if (guessedModId) {
        console.log(`You're dumb, ${fluidId} is ${guessedModId}`);
        return Fluid.of(guessedModId, amount);
    }
    throw new Error(`Fluid ${fluidId} does not exist.`);
}
const safeItemId = function(itemIdWithQuantifier) {
    const itemId = itemIdWithQuantifier.includes(" ") ? itemIdWithQuantifier.split(" ")[1] : itemIdWithQuantifier;
    if (Item.exists(itemId)) {
        return itemIdWithQuantifier;
    }
    const guessedModId = guessModId(itemId, "item");
    if (guessedModId) {
        console.log(`You're dumb, ${itemId} is ${guessedModId}`);
        return itemIdWithQuantifier.replace(itemId, guessedModId);
    }
    throw new Error(`ItemId ${itemId} does not exist.`);
}
const guessModId = function(itemId, entity) {
    const modId = itemId.split(":")[0];
    
    // No modId.. just guess it/bruteforce it
    const onlyItemId = itemId.includes(":") ? itemId.split(":")[1] : itemId;
    const modIdsToTry = ["gtceu", "susy", "minecraft"];

    // Determine the appropriate existence check based on the entity type
    const exists = entity === "item" ? Item.exists : Fluid.exists;

    // Iterate over the modIdsToTry and return the first valid one
    for (const mod of modIdsToTry) {
        if (mod !== modId && exists(`${mod}:${onlyItemId}`)) {
            return `${mod}:${onlyItemId}`;
        }
    }

    // If no valid mod ID found, return undefined
    return undefined;
}
