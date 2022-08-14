// 7. Từ [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }]
// Trả về {
//   "audi": [
//     {
//       "make": "audi",
//       "model": "r8",
//       "year": "2012"
//     },
//     {
//       "make": "audi",
//       "model": "rs5",
//       "year": "2013"
//     }
//   ],
//   "ford": [
//     {
//       "make": "ford",
//       "model": "mustang",
//       "year": "2012"
//     },
//     {
//       "make": "ford",
//       "model": "fusion",
//       "year": "2015"
//     }
//   ],
//   "kia": [
//     {
//       "make": "kia",
//       "model": "optima",
//       "year": "2012"
//     }
//   ]
// }

const arr000 = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];
const groupByCategory = arr000.reduce((group, product) => {
  const { make } = product;
  group[make] = group[make] ?? [];
  group[make].push(product);
  return group;
}, {});

console.log(groupByCategory);
