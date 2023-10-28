import React from "react";

const TransactionTable = () => {
  return (
    <div className="mx-4 my-4  flex flex-col">
      <div className="dark:!bg-navy-800 relative mx-auto flex w-[576px] flex-col items-center rounded-[10px] border-[1px] border-gray-200 bg-black bg-clip-border p-4 shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:text-white dark:shadow-none">
        <h2 className="pb-4 text-lg font-semibold text-gray-500">
          Transacciones
        </h2>
        <div className="my-1"></div>
        <div className="mb-6 h-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-sm leading-normal">
              <th className="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
                Nombre
              </th>
              <th className="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-sm font-bold uppercase">
                Fecha
              </th>
              <th className="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-right text-sm font-bold uppercase">
                Monto
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-grey-lighter">
              <td className="border-grey-light border-b px-4 py-2">
                Carlos Sánchez
              </td>
              <td className="border-grey-light border-b px-4 py-2">
                27/07/2023
              </td>
              <td className="border-grey-light border-b px-4 py-2 text-right">
                $1500
              </td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="border-grey-light border-b px-4 py-2">
                Ana Torres
              </td>
              <td className="border-grey-light border-b px-4 py-2">
                28/07/2023
              </td>
              <td className="border-grey-light border-b px-4 py-2 text-right">
                $2000
              </td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="border-grey-light border-b px-4 py-2">
                Juan Ramírez
              </td>
              <td className="border-grey-light border-b px-4 py-2">
                29/07/2023
              </td>
              <td className="border-grey-light border-b px-4 py-2 text-right">
                $1800
              </td>
            </tr>

            <tr className="hover:bg-grey-lighter">
              <td className="border-grey-light border-b px-4 py-2">
                Luis González
              </td>
              <td className="border-grey-light border-b px-4 py-2">
                31/07/2023
              </td>
              <td className="border-grey-light border-b px-4 py-2 text-right">
                $1700
              </td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="border-grey-light border-b px-4 py-2">
                Laura Pérez
              </td>
              <td className="border-grey-light border-b px-4 py-2">
                01/08/2023
              </td>
              <td className="border-grey-light border-b px-4 py-2 text-right">
                $2400
              </td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="border-grey-light border-b px-4 py-2">
                Pedro Hernández
              </td>
              <td className="border-grey-light border-b px-4 py-2">
                02/08/2023
              </td>
              <td className="border-grey-light border-b px-4 py-2 text-right">
                $1950
              </td>
            </tr>
            <tr className="hover:bg-grey-lighter">
              <td className="border-grey-light border-b px-4 py-2">
                Sara Ramírez
              </td>
              <td className="border-grey-light border-b px-4 py-2">
                03/08/2023
              </td>
              <td className="border-grey-light border-b px-4 py-2 text-right">
                $1850
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
