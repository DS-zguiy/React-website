const buildTree = (parent, children) => {
  const nodes = [...parent, ...children];
  const nodeMap = new Map();
  const tree = [];

  // 创建一个映射
  nodes.forEach((node) => {
    node.children = [];
    nodeMap.set(node.uuid, node);
  });

  // 构建树形结构
  nodes.forEach((node) => {
    if (node.categoryuuid) {
      const parent = nodeMap.get(node.categoryuuid);
      if (parent) {
        parent.children.push(node);
      } else {
        // 如果找不到父节点，将其直接放到顶层
        tree.push(node);
      }
    } else {
      // 如果没有父节点标识，说明是根节点
      tree.push(node);
    }
  });

  return tree;
};

function buildArr(arr) {
  const result = [];

  arr.forEach((item) => {
    if (item.children.length === 0) {
      result.push(item);
    } else {
      result.push(...buildArr(item.children));
    }
  });

  return result;
}

function buildItems(categories, items: any) {
  let parent: any = [];
  items.forEach((item) => {
    parent = categories.find((category) => category.uuid === item.parentuuid);
    console.log(parent);
    if (parent) {
      parent.children.push(item);
    }
  });
  return parent;
}

export { buildTree, buildArr, buildItems };
