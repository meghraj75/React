const items = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];
  return items.map(item => <div key={item.id}>{item.name}</div>);
  