import July_P1 from '../assets/img/July_P1.png'
import July_P2 from '../assets/img/July_P2.png'
import July_P3 from '../assets/img/July_P3.png'

const Reports = () => {
  return (
    <div
      style={{ justifyContent: "center", display: "flex", alignItems: "center", height: "100%", margin: "12px", flexDirection: "column" }}>
      <h1>Reportes mes de Julio</h1>
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div
            className="image-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            <img
              src={July_P1}
              alt="Productivity for July"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
      <hr /> {/* Add the line between the two graphs */}
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div
            className="image-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            <img
              src={July_P2}
              alt="Productivity for July"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
      <hr /> {/* Add the line between the two graphs */}
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div
            className="image-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            <img
              src={July_P3}
              alt="Productivity for July"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports