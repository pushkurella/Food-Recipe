import fs from "node:fs";

// import sql from "better-sqlite3";
// const db = sql("meals.db");
import slugify from "slugify";
import xss from "xss";
import { dummyMeals } from "@/initdb";

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("loading failed");
  // return db.prepare("SELECT * FROM meals").all();
  return dummyMeals;
}

export function getMeal(slug) {
  // return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  const selectedMeal = dummyMeals.find((meal) => meal.slug === slug);
  console.log(selectedMeal);
  return selectedMeal;
}

export async function saveMeal(meal) {
  console.log("meal not added as the database is not up and running");
  // meal.slug = slugify(meal.title, { lower: true });
  // meal.instructions = xss(meal.instructions);
  // const extension = meal.image.name.split(".").pop();
  // const fileName = `${meal.slug}.${extension}`;
  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  // const bufferedImage = await meal.image.arrayBuffer();
  // stream.write(Buffer.from(bufferedImage), (err) => {
  //   if (err) {
  //     throw new Error("Saving image failed!");
  //   }
  // });
  // meal.image = `/images/${fileName}`;
  // db.prepare(
  //   `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (
  //       @title,
  //       @summary,
  //       @instructions,
  //       @creator,
  //       @creator_email,
  //       @image,
  //       @slug
  //     )`
  // ).run(meal);
}
