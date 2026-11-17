import React from "react";
import Nav from "./components/Section1/Nav";
import PageContent from "./components/Section1/PageContent";

const App = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      button: "Under sereved",
      color: "blue",
    },
    {
      img: "https://images.unsplash.com/photo-1712032575327-635d715c6ce5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      button: "Satisfied",
      color: "gray",
    },
    {
      img: "https://images.unsplash.com/photo-1660891149845-164ef230d724?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      button: "Under banked",
      color: "green",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1794227570877-d7cf17a3e811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      button: "Under cover",
      color: "purple",
    },
  ];
  return (
    <div className="w-full h-screen p-4">
      <Nav />
      <PageContent data={cards} />
    </div>
  );
};

export default App;
