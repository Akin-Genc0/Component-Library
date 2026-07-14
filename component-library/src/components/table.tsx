"use client";

type TableProps = {
  label?: string;
  styleType: "neu-flat" | "neu-inset" | "neu-pressed";
  header: string[];
  rows: Record<string, string>[];
};

type TableObj = {
  tables: TableProps[];
};

export default function Table({ tables }: TableObj) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-8 w-full">
      {tables.map((element, index) => (
        <div
          key={index}
          className={`no-hover ${element.styleType} p-4 sm:p-6 flex-1 min-w-0 max-w-full overflow-hidden`}
        >
          {element.label && (
            <h2 className="text-lg font-semibold mb-4 text-foreground">
              {element.label}
            </h2>
          )}
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {element.header.map((col, colIndex) => (
                    <th
                      key={colIndex}
                      className="text-left text-xs sm:text-sm font-semibold text-foreground/70 px-2 sm:px-4 py-2 sm:py-3 border-b border-foreground/10 whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {element.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="transition-colors duration-200 hover:bg-foreground/5"
                  >
                    {element.header.map((col, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-foreground/90 border-b border-foreground/5 whitespace-nowrap"
                      >
                        {row[col]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
