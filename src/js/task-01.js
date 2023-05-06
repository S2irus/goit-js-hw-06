const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

const totalCategories = categoryItems.length;
console.log("Number of categories:", totalCategories);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const elements = item.querySelectorAll("li");
  const totalElements = elements.length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", totalElements);
});
