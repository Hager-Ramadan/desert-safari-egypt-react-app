import "./Video.scss"
function Video() {
  return (
    <div className=" " style={{ display: "flex", width: "100%", height: "100%", transform: "translate(0%, 0%)" }}>
      <div className="" style={{ display: "flex", width: "100%", height: "100%" }}>
        <video style={{ position: "relative", width: "-webkit-fill-available" }} poster="https://desert-safari-egypte.com/wp-content/uploads/2022/10/kv-desert-safary-egypt.jpg" playsInline autoPlay muted loop src="https://desert-safari-egypte.com/wp-content/uploads/2022/10/kv-desert-safari-egypt.mp4" />
        <h1 style={{ position: "absolute", bottom: "45px", left: "5%", color: "white", fontSize: "60px", fontWeight: "700", }}>Desert Safari Egypt</h1>
      </div>
    </div>
  );
}

export default Video;