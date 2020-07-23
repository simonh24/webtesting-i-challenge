module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (!item.enhancement) {
    return { message: "item cannot be enhanced" }
  } else if (item.enhancement >= 20) {
    return item;
  }
  return { ...item, enhancement: item.enhancement + 1 };
}

function fail(item) {
  if (!item.enhancement) {
    return { message: "item cannot be enhanced" }
  } else if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 }
  } else if (item.enhancement === 20) {
    return item;
  } else {
    if (item.enhancement > 16) {
      return { ...item, durability: item.durability - 10, enhancement: item.enhancement - 1 }
    }
    return { ...item, durability: item.durability - 10 }
  }
}

function repair(item) {
  if (!item.durability) {
    return { message: "your item has no durability." }
  } else if (item.durability >= 100) {
    return { message: "your item already has max durability." }
  } else if (item.durability <= 0) {
    return { message: "your item is already broken" }
  }
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement === 0) {
    return item;
  } else {
    return { ...item, name: `[+${item.enhancement}] ${item.name}` }
  }
}
