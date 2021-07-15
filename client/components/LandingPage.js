import React from "react";
import { Card } from "@material-ui/core";
export default function LandingPage() {
  return (
    <div>
      <Card className="Card">
        <h1 className="text">It's Thyme for a change...</h1>
        <h3 className="text2">
          Have you ever looked into your fridge and wondered what food is yours?
          Afraid your roommates or coworkers will get mad if you accidentally
          eat their food? What about all that food you buy that you forget
          about? Think of all the food you're wasting! It's Thyme to use Thyme!
          And application where you can add food to a food container and keep
          track of how much you have, who owns what, and how much food you're
          wasting.
        </h3>
        <img
          className="img"
          alt=""
          src="http://cdn.shopify.com/s/files/1/2459/1583/articles/Orient-Refrigerators_large@2x.jpg?v=1515663297"
		  width='auto'
		  height='auto'
        />
      </Card>
      <Card className="Card1" style={{ marginTop: "5%" }}>
        <img
          className="img1"
          alt=""
          src="https://opt.toiimg.com/recuperator/img/toi/m-61863614/61863614.jpg&width=500&resizemode=4"
        />
        <h1 className="text3">Stop losing money!</h1>
        <h3 className="text3">
          You know you're not going to cook that pork chop.. and brussel
          sprouts, really?
        </h3>
      </Card>
    </div>
  );
}
