import { Table } from "../../components/shared/table";
import { dataTable } from "../../constant";
import Styles from "./index.module.scss";

import ArrowRight from "../../components/icons/arrow-right";
import ArrowLeft from "../../components/icons/arrow-left";
import ArrowDown from "../../components/icons/arrow-down";
import MoreVertical from "../../components/icons/more-vertical";

export default function History() {
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

        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Column className={Styles.firstColumn}>
                <div className={Styles.flexData}>
                  Merchant
                  <ArrowDown />
                </div>
              </Table.Column>
              <Table.Column className={Styles.secondColumn}>Date</Table.Column>
              <Table.Column className={Styles.thirdColumn}>Time</Table.Column>
              <Table.Column className={Styles.fourthColumn}>
                Earned Points
              </Table.Column>
              <Table.Column className={Styles.fifthColumn}></Table.Column>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {dataTable.map((data) => (
              <Table.Row key={data.id}>
                <Table.Data>
                  <div className={Styles.flexData}>
                    <img src={data.icon} alt={data.name} />
                    {data.name}
                  </div>
                </Table.Data>
                <Table.Data>{data.date}</Table.Data>
                <Table.Data>{data.time}</Table.Data>
                <Table.Data>
                  <div className={Styles.point}>+ {data.point} Point</div>
                </Table.Data>
                <Table.Data>
                  <MoreVertical />
                </Table.Data>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

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
