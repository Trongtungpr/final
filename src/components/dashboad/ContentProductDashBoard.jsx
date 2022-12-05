import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delProduct, getAll, searchProduct } from "../../api/product.api";
import ViewDetail from "../../frontend/viewdetial/Viewdetail";
import { getAllProductsAction } from "../../stores/actions/productActions";
import { getAllUserActions } from "../../stores/actions/userAction";
import FormEditProduct from "./FormEditProduct";
const ContentProductDashBoard = (props) => {
  const [stateDate, setstateData] = useState(false);
  const [stateEdit, setStateEdit] = useState(false);
  const [stateAdd, setStateAdd] = useState(false);
  const [stateView, setStateView] = useState(false);
  const dispath = useDispatch();
  console.log("data ", stateDate);
  console.log("edit ", stateEdit);
  console.log("add ", stateAdd);

  const FetProduct = useCallback(() => {
    getAll().then((res) => setstateData(res));
  }, []);
  useEffect(() => {
    FetProduct();
  }, []);
  const dataSearch = useCallback(() => {
    console.log("value search", document.getElementById("search-user").value);
    searchProduct(document.getElementById("search-user").value).then((res) =>
      setstateData(res)
    );
  }, []);

  const handleDel = (id) => {
    delProduct(id);
    dispath(getAllProductsAction());
    FetProduct();
  };
  const handleEdit = (id, name, category, desscription, price, img) => {
    setStateEdit({
      id: id,
      name: name,
      category: category,
      desscripton: desscription,
      price: price,
      img: img,
    });
  };
  const handleBack = () => {
    FetProduct();
    setStateEdit(false);
    setStateAdd(false);
    setStateView(false);
  };
  const handleAdd = () => {
    setStateAdd(true);
  };
  const handleSearch = () => {
    dataSearch();
  };
  const viewDetail = (item) => {
    setStateView(item);
  };
  return (
    <>
      <div class="row">
        <div class="d-flex justify-content-between">
          <div className="search d-flex">
            <h3>Search</h3>
            <input id="search-user" class="mx-2" type="text"></input>
            <button class="btn btn-dark" onClick={handleSearch}>
              {" "}
              OK
            </button>
          </div>
          <button class="btn btn-dark" onClick={handleAdd}>
            {" "}
            Add Item
          </button>
        </div>
      </div>
      {(stateEdit === false && stateAdd === false && stateView == false && (
        <div class="row content-dashboad">
          <div class="col-md-12">
            <div class="table-wrap">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>ID no.</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Desscription</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {stateDate != false &&
                    stateDate.data.map((item) => (
                      <tr class="alert" role="alert">
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.desscription}</td>
                        <td>${item.price}</td>
                        <td>
                          <button
                            class="btn btn-dark"
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.name,
                                item.category,
                                item.price,
                                item.img,
                                item.desscription
                              )
                            }
                          >
                            {" "}
                            Edit
                          </button>
                          <button
                            class="mx-4 btn btn-info"
                            onClick={() => handleDel(item.id)}
                          >
                            {" "}
                            Delete
                          </button>
                          <button
                            class="mx-4 btn btn-success"
                            onClick={() => viewDetail(item)}
                          >
                            {" "}
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )) ||
        (stateEdit != false && stateAdd === false && stateView == false && (
          <div>
            <button class="btn btn-info " onClick={handleBack}>
              {" "}
              Back{" "}
            </button>
            <FormEditProduct product={stateEdit} type={"edit"} />
          </div>
        ))}
      {stateAdd === true && stateView == false && (
        <div>
          <button class="btn btn-info " onClick={handleBack}>
            {" "}
            Back{" "}
          </button>
          <FormEditProduct
            product={{ id: "", email: "", password: "" }}
            type={"add"}
          />
        </div>
      )}
      {stateView != false && (
        <div>
          <button class="btn btn-info " onClick={handleBack}>
            {" "}
            Back{" "}
          </button>
          <ViewDetail product={stateView} type={true} />
        </div>
      )}
    </>
  );
};
export default ContentProductDashBoard;
