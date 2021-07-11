let data = [
  949,  686,  648,  453,  484,  486,  216,  366,  481,  362,
  86,  232,  403,  181,  822,  192,  731,  973,  547,  308,
  518,  852,  829,  950,  637,  821,  797,  972,  749,  309,
  67,  472,  910,  358,  564,  464,  643,  687,  137,  139,
  432,  695,  524,  98,  650,  615,  764,  796,  542,  157,
  456,  529,  448,  145,  874,  356,  538,  913,  585,  145,
  193,  383,  109,  915,  781,  527,  212,  621,  923,  959,
  847,  336,  576,  914,  638,  609,  674,  624,  722,  735,
  430,  403,  337,  987,  997,  814,  813,  490,  147,  341,
  254,  244,  721,  184,  554,  35,  946,  653,  158,  676
];
let N = data.length;

function swap(array, i, j) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

function output() {
  const divideBy = 10;
  const div = parseInt(N / divideBy);
  let lines = [];
  for (let i=0; i<div; i++) {
    lines.push(data.slice(divideBy*i, divideBy*(i+1)).join(' '));
  }
  console.log(lines.join("\n"))
}
