function TodoItem2(){

  let itemName = 'Go To School';
  let itemDate = '16/07/2024';
  return(
    <div class="container">
    <div class="row kg-row">
    <div class="col-5">
      {itemName}
    </div>
    <div class="col-5">
     {itemDate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
  </div>
  )
}

export default TodoItem2;