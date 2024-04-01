/* We create HOC bcoz we don't want to write table again & again, so that from here
 we just need to pass data whereever we want this table to be used */

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";

/* T type here means generic, but it should be of type object as it's extending Object
 we can pass whatever we want to pass from calling component */

function TableHOC<T extends Object | {}>(
  columns: Column<T>[],
  data: T[],
  containerClassName: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 2,
      },
    };
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageCount,
      gotoPage,
      state: { pageIndex },
    } = useTable(options, useSortBy, usePagination);

    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading} </h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups?.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup?.headers?.map((column: any) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted && (
                      <span style={{ top: "3px", position: "relative" }}>
                        {!column.isSortedDesc ? (
                          <AiOutlineArrowUp />
                        ) : (
                          <AiOutlineArrowDown />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page?.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {showPagination && (
          <div className="tablePagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              First page
            </button>
            <button onClick={previousPage} disabled={!canPreviousPage}>
              Prev
            </button>
            <span>
              {pageIndex + 1} of {pageCount}
            </span>
            <button onClick={nextPage} disabled={!canNextPage}>
              Next
            </button>
            <button onClick={() => gotoPage(pageCount)} disabled={!canNextPage}>
              Last page
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
