import { dataTable } from "../../constant";
import Styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import ArrowRight from "../../components/icons/arrow-right";
import ArrowLeft from "../../components/icons/arrow-left";
import ArrowDown from "../../components/icons/arrow-down";
import MoreVertical from "../../components/icons/more-vertical";

export default function History() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  console.log(isLoggedIn);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h2>Point History</h2>
        <p>View your earned and reedemed point</p>
      </div>

      <div className={Styles.tab}>
        <button className={`${Styles.tabBtn} ${Styles.active}`}>Earned</button>
        <button className={Styles.tabBtn}>Reedem</button>
      </div>

      <div className={Styles.card}>
        <div className={Styles.cardHeader}>
          <div className={Styles.cardLeft}>
            <h3>Company List Lorem Ipsum</h3>
            <p>These companies consecture ipsum</p>
          </div>

          <div className={Styles.cardRight}>
            <div className={Styles.inputContainer}>
              <select className={Styles.select}>
                <option value="all">All</option>
              </select>

              <div className={Styles.inputSearch}>
                <img src="/assets/icons/search.svg" alt="search" />
                <input className={Styles.input} placeholder="Search" />
              </div>
            </div>
            <button className={Styles.btnSearch}>Search</button>
          </div>
        </div>

        <table className={Styles.table}>
          <tr>
            <th className={Styles.firstColumn}>
              <div className={Styles.flex}>
                Merchant
                <ArrowDown />
              </div>
            </th>
            <th className={Styles.secondColumn}>Date</th>
            <th className={Styles.thirdColumn}>Time</th>
            <th className={Styles.fourthColumn}>Earned Points</th>
            <th className={Styles.fifthColumn}></th>
          </tr>
          {dataTable.map((data) => (
            <tr key={data.id}>
              <td className={Styles.firstColumn}>
                <div className={Styles.flex}>
                  <img src={data.icon} alt={data.name} />
                  {data.name}
                </div>
              </td>
              <td className={Styles.secondColumn}>{data.date}</td>
              <td className={Styles.thirdColumn}>{data.time}</td>
              <td className={Styles.fourthColumn}>
                <div className={Styles.point}>+ {data.point} Point</div>
              </td>
              <td className={Styles.fifthColumn}>
                <MoreVertical />
              </td>
            </tr>
          ))}
        </table>

        <div className={Styles.pagination}>
          <button className={Styles.btnPagination}>
            <ArrowRight />
            Prev
          </button>

          <div className={Styles.pageNumber}>
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={index}
                className={`${Styles.btnPage} ${index === 0 && Styles.active}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button className={Styles.btnPagination}>
            Next
            <ArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
}
