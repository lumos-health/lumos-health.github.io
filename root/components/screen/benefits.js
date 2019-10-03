function Benefits(props) {
    var benefitsStyle = {
        //backgroundImage: "linear-gradient(aliceblue, white)",
        backgroundColor: "ghostwhite",
        borderTop: "0.5em solid white",
        borderRight: "1em solid white",
        borderLeft: "1em solid white",
        overflow: "auto"
        // border: "1em solid white"
    };

    var specsStyle = {
        //backgroundImage: "linear-gradient(aliceblue, white)",
        backgroundColor: "aliceblue",
        borderTop: "0.5em solid white",
        borderRight: "1em solid white",
        borderLeft: "1em solid white",
        overflow: "auto"
    };

    var benefitsDiv = (
      <div class="center h-50 w-100 black ba bw3 b--white"
           style={benefitsStyle}>
          <div>
              <h2 class="f1 f1-l normal center tc"
              >
                Benefits - Change title Idk
              </h2>
              <p class="pv2 center tc">
                  Imagine all the text you can write here
              </p>
          </div>
      </div>
  );

  var specsDiv = (
      <div class="center h-50 w-100 black ba bw3 b--white"
           style={specsStyle}>
          <div>
              <h2 class="f1 f1-l normal center tc"
              >
                Specifications - Change title idk
              </h2>
              <p class="pv2 center tc">
                  Imagine all the text you can write here
              </p>
          </div>
      </div>
  );

  return (
      <div
          class="vh-100 center">
          {benefitsDiv}
          {specsDiv}
      </div>
  );
}