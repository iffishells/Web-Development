module.export = getDate;
console.log(module.export);
function getDate() {
  const option = {
    weekday: "long",
    year: 'numeric',
    month: "long",
    day: "numeric"
  }
  var date = new Date()
  CurrentDate = date.toLocaleDateString('en-US', option)
  resp.render("list", {
    kingOfDay: CurrentDate,
    newitem: set_items_list
  });
  return CurrentDate
}
