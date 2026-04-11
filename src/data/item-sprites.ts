const WIKI_BASE = 'https://minecraft.wiki/images/Invicon_'

/** Short name → wiki image filename (without extension) */
export const ITEM_SPRITES: Record<string, string> = {
  'Plank': 'Oak_Planks',
  'Planks': 'Oak_Planks',
  'Stick': 'Stick',
  'Cobble': 'Cobblestone',
  'Iron': 'Iron_Ingot',
  'Diamond': 'Diamond',
  'Coal': 'Coal',
  'Wool': 'White_Wool',
  'Obsidian': 'Obsidian',
  'Redstone': 'Redstone_Dust',
  'Paper': 'Paper',
  'Copper': 'Copper_Ingot',
  'Amethyst': 'Amethyst_Shard',
  'Gold': 'Gold_Ingot',
  'Blaze P.': 'Blaze_Powder',
  'E. Pearl': 'Ender_Pearl',
  'Flint': 'Flint',
  'Log': 'Oak_Log',
  'Wheat': 'Wheat',
  'Book': 'Book',
  'Compass': 'Compass',
  'Eye': 'Eye_of_Ender',
  'String': 'String',
  'Leather': 'Leather',
  'IronBlk': 'Block_of_Iron',
  'Potato': 'Potato',
}

/** Recipe result name → wiki image filename (without extension) */
export const RESULT_SPRITES: Record<string, string> = {
  'Crafting Table': 'Crafting_Table',
  'Wooden Pickaxe': 'Wooden_Pickaxe',
  'Stone Pickaxe': 'Stone_Pickaxe',
  'Iron Pickaxe': 'Iron_Pickaxe',
  'Diamond Pickaxe': 'Diamond_Pickaxe',
  'Furnace': 'Furnace',
  'Torch': 'Torch',
  'Bucket': 'Bucket',
  'Bed': 'White_Bed',
  'Chest': 'Chest',
  'Shield': 'Shield',
  'Nether Portal': 'Obsidian',
  'Flint & Steel': 'Flint_and_Steel',
  'Campfire': 'Campfire',
  'Map': 'Map',
  'Cartography Table': 'Cartography_Table',
  'Enchanting Table': 'Enchanting_Table',
  'Bread': 'Bread',
  'Baked Potato': 'Baked_Potato',
  'Eye of Ender': 'Eye_of_Ender',
  'Ender Chest': 'Ender_Chest',
  'Anvil': 'Anvil',
  'Spyglass': 'Spyglass',
  'Iron Armor (chest)': 'Iron_Chestplate',
  'Sword (Iron)': 'Iron_Sword',
  'Bow': 'Bow',
}

export function itemSpriteUrl(shortName: string): string | null {
  const filename = ITEM_SPRITES[shortName]
  return filename ? `${WIKI_BASE}${filename}.png` : null
}

export function resultSpriteUrl(recipeName: string): string | null {
  const filename = RESULT_SPRITES[recipeName]
  return filename ? `${WIKI_BASE}${filename}.png` : null
}
