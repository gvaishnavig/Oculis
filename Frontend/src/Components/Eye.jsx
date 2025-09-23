function Eye() {
  return (
    <div className="container  mt-5">
      <div className="row ">
        <div className="col pt-4">
          <h1 className="mb-3 lh-sm">
            TECHNOLOGY
            <br />
            AT YOUR <br />
            FINGERTIPS
          </h1>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            eveniet, laboriosam, corporis inventore dicta quam rem minima natus,
            praesentium nisi quos ducimus dolore! Voluptate, rem tempora est
            ipsa ratione ex.
          </p>
        </div>
        <div className="col">
          <img
            src="./images/Oculis_EyeG.png"
            style={{
              width: "70%",
              marginLeft: "20%",
              border: "4px solid #32a862",
              borderRadius: "8px",
              boxShadow: "0 6px 12px rgba(0,255,255,0.3)",
              padding: "4px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Eye;
