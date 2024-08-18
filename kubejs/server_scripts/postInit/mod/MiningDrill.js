ServerEvents.recipes(event => {

  event.recipes.susy.mining_drill('qk8eovvvyitthb') // remapped from original line 6
    .notConsumable(safeItemId('1x susy:deposit_block'))
    .itemOutputs(safeItemId('1x susy:rock.orthomagmatic'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('n4sxqc7jrr1gph') // remapped from original line 13
    .notConsumable(safeItemId('1x susy:deposit_block'))
    .itemOutputs(safeItemId('1x susy:rock.metamorphic'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('1hxyga0m4pwtj1') // remapped from original line 20
    .notConsumable(safeItemId('1x susy:deposit_block'))
    .itemOutputs(safeItemId('1x susy:rock.sedimentary'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('8axkragdjxoaof') // remapped from original line 27
    .notConsumable(safeItemId('1x susy:deposit_block'))
    .itemOutputs(safeItemId('1x susy:rock.hydrothermal'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('f7xinlodwzw4f7') // remapped from original line 34
    .notConsumable(safeItemId('1x susy:deposit_block'))
    .itemOutputs(safeItemId('1x susy:rock.alluvial'))
    .duration(20)
    .EUt(30)

  event.recipes.susy.mining_drill('i8iqjyizhtjkmu') // remapped from original line 41
    .notConsumable(safeItemId('1x susy:deposit_block'))
    .itemOutputs(safeItemId('1x susy:rock.magmatic_hydrothermal'))
    .duration(20)
    .EUt(30)

 // The following forLoops couldn't be parsed, they were added to the forLoopBuffers
 // The following entries are unknown or couldn't be parsed, you should rewrite them manually.
  // import classes.*;
  // import net.minecraft.init.Blocks;
  // MINING_DRILL = recipemap('mining_drill')
});