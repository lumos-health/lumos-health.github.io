function Product(props) {
    var productStyle = {
        backgroundImage: "linear-gradient(to right, #ffffff, #ffffff, lightgrey)",
        overflow: "auto"
        // border: "1em solid",
        // borderColor: "transparent"
    };

    var imageStyle = {
        display: "block",
        maxWidth: "100%",
        width: "auto",
        height: "auto",
        borderRadius: "15%",
        zIndex: "0"
    };

    var mechanismDiv = (
        <div class="center h-75 w-75 black">
        <div>
            <h2 class="f1 f1-l normal center tc"
            >
            Mechanism
            </h2>
        </div>
        <div class="pb4-m pb5-l flex flex-row justify-center pv2">
            <img
                class="ph3 w-100"
                style={imageStyle}
                src={"common/images/proto_3.jpg"}
            />
        </div>
        </div>
    );

  var functionDiv = (
      <div class="center h-75 w-75 black">
          <div>
              <h2 class="f1 f1-l normal center tc"
              >
                Features
              </h2>
              <p class="pv2">
                  function 1
              </p>
              <p class="pv2">
                  function 2
              </p>
              <p class="pv2">
                  function 3
              </p>
          </div>
      </div>
  );

  return (
      <div
          style={productStyle}
          class="vh-100 product">
          <SplitComponents
            classNamesLeft="vh-75 bg-inherit"
            classNamesRight="vh-75 bg-inherit"//light-blue" 
            right={functionDiv}
            left={mechanismDiv}
          />
      </div>
  );
}
