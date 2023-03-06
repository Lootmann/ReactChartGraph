import React from "react";

function Rechart({ categories, households }: PropType) {
  return (
    <>
      <h2 className="text-2xl">Recharts</h2>

      <div className="text-xl flex flex-col gap-2">
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Amout</th>
              <th>Category</th>
              <th>Memo</th>
            </tr>
          </thead>

          <tbody>
            {households.slice(0, 10).map((household) => (
              <tr>
                <td>{household.id}</td>
                <td>{household.amount}</td>
                <td>
                  {household.category.id}: {household.category.name}
                </td>
                <td>{household.memo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Rechart;
