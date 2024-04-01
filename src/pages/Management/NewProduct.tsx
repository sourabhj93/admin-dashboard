import AdminSideBar from "../../components/AdminSideBar";
import { Formik, Field, Form } from "formik";

const NewProduct = () => {
  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSideBar />
      {/* MainContent */}
      <main className="newProduct">
        <div>
          <Formik
            initialValues={{
              name: "Sourabh",
              price: "",
              stock: "",
              iamge: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="Jane" value={.value} />

              <label htmlFor="price">Price</label>
              <Field id="price" name="price" placeholder="25000" />

              <label htmlFor="stock">Stock</label>
              <Field id="stock" name="stock" placeholder="300" />

              <label htmlFor="photo">Photo</label>
              <Field id="photo" name="photo" placeholder="image" type="file" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </main>
    </div>
  );
};

export default NewProduct;
