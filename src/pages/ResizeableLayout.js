import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import "./styles/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const MyResizableLayout = () => {

  //items
  const gridItems = [
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" },
    { id: 3, name: "Item Three" }
  ];

  //default layout when the page load this layout size will display
  const layout = [
    { i: "1", x: 6, y: 0, w: 6, h: 3, minW: 2, minH: 2},
    { i: "2", x: 0, y: 0, w: 6, h: 3, minW: 2, minH: 2 },
    { i: "3", x: 0, y: 0, w: 12, h: 2, minW: 2, minH: 2 }
  ];
  
  return (
    <ResponsiveGridLayout
        layouts={{ lg: layout }}
        className="layout"
        draggableHandle=".grid-item__title"
        isDraggable
        isRearrangeable
        isResizable
        // resizeHandles={["se", "ne", "sw", "nw"]}
        margin={[20, 20]}
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {gridItems.map((item, i) => {
          return (
            <div key={item.id} className="grid-item">
              component {item.id}
            </div>
          );
        })}
      </ResponsiveGridLayout>
  );
};

export default MyResizableLayout;
