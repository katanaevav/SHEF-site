import React, {PureComponent} from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import PropTypes from "prop-types";

import Dish from "../dish/dish.jsx";


class MenuGroupNavigator extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {

    const {groupId, groupName} = this.props;

    return (
      <React.Fragment>

         <section className="menu-group-navigator" id={groupId}>
          <h2 className="menu-group-navigator__header">{groupName}</h2>
          <ScrollContainer className="menu-group-navigator__wrapper"
            hideScrollbars = {false}
          >
            <ul className="menu-group-navigator__list">

              <Dish
                dishNmae = {`Анатомия вкуса`}
                dishDescription = {`Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда`}
                dishPrice = {`250 р.`}
                dishWeight = {`250 гр.`}
                dishTag = {`NEW`}
              />

              <Dish
                dishNmae = {`Лапша домашняя`}
                dishDescription = {`Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда`}
                dishPrice = {`350 р.`}
                dishWeight = {`300 гр.`}
                dishTag = {``}
              />

              <Dish
                dishNmae = {`Анатомия вкуса`}
                dishDescription = {`Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда`}
                dishPrice = {`250 р.`}
                dishWeight = {`250 гр.`}
                dishTag = {`NEW`}
              />

              <Dish
                dishNmae = {`Лапша домашняя`}
                dishDescription = {`Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда`}
                dishPrice = {`350 р.`}
                dishWeight = {`300 гр.`}
                dishTag = {``}
              />

              <Dish
                dishNmae = {`Анатомия вкуса`}
                dishDescription = {`Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда`}
                dishPrice = {`250 р.`}
                dishWeight = {`250 гр.`}
                dishTag = {`NEW`}
              />

              <Dish
                dishNmae = {`Лапша домашняя`}
                dishDescription = {`Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда
                Описание блюда Описание блюда`}
                dishPrice = {`350 р.`}
                dishWeight = {`300 гр.`}
                dishTag = {``}
              />

            </ul>
          </ScrollContainer>
        </section>

      </React.Fragment>
    );
  }
};


MenuGroupNavigator.propTypes = {
  groupId: PropTypes.number,
  groupName: PropTypes.string,
}


export default MenuGroupNavigator;
