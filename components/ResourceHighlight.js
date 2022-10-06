function ResourceHighlight({ resources }) {
  return (
    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <figure className="image is-16by9">
                  <img src="hero.jpg" alt="" />
                </figure>
              </div>
            </div>

            {
              resources.map(resource => {
                return (
                  <section key={resource.id} className="section">
                    <div className="columns">
                      <div className="column is-8 is-offset-2">
                        <div className="content is-medium">
                          <h2 className="subtitle is-4">{resource.createdAt}</h2>
                          <h1 className="title">{resource.title}</h1>
                          <p>{resource.description}</p>
                        </div>
                      </div>
                    </div>
                  </section>
                )
              })
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default ResourceHighlight;