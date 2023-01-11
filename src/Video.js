function Video() {
    return(
      <div className="videoContainer">
        <h1 className="pageHeader">Video - Warum ist die Elektromobilität nicht so gut wie man denkt?</h1>
        <video width="800" height="600" controls>
          <source src={ process.env.PUBLIC_URL + "/Videoclip_M152_Elektromobilität800x600.mp4"} type="video/mp4"/>
        </video>
      </div>
    )
}

export default Video;