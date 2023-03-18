import React from "react";
import "./style/Courses.scss";
import CoursesBlock from "../components/CoursesBlock/CoursesBlock";
import Sort from "../components/Sort/Sort";

function Courses() {
  const [courses, setCourses] = React.useState([]);
  const [sortType, setSortType] = React.useState({
    name: "popular",
    sortProperty: "sales",
  });

  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

  React.useEffect(() => {
    fetch(
      `https://638c7706eafd555746a6f3d9.mockapi.io/courses?&sortBy=${sortBy}&order=${order}`
    ).then((res) => {
      return res.json().then((arr) => {
        setCourses(arr);
      });
    });
  }, [sortType]);

  return (
    <div className="courses-content">
      <div className="courses-top">
        <div className="courses-text">
          <h1 className="courses-title">Our courses</h1>
          <p className="courses-subtitle">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>
      <div className="courses-sort">
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <div className="courses-list">
        {courses.map((obj) => (
          <CoursesBlock
            imageUrl={obj.imageUrl}
            shortName={obj.shortName}
            fullName={obj.fullName}
            price={obj.price}
            time={obj.time}
            duration={obj.duration}
            sales={obj.sales}
          />
        ))}
      </div>
    </div>
  );
}
export default Courses;
