function commonAncestorBT(node, n1, n2){
  if(!node) return;
  var val = node.value;
  if(n1 == val || n2 ==val){
    return node;
  }
  var left = commonAncestorBT(node.left, n1, n2);
  var right = commonAncestorBT(node.right, n1, n2);
  if(left && right){
    return node;
  }
  return (left) ? left : right;
}