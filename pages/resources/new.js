import Layout from "components/Layout";
import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
import { useState } from "react";
import axios from "axios";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "Medium",
  timeToFinish: 60
}

const ResourceCreate = () => {
  const [form, setForm] = useState(DEFAULT_DATA);

  const submitForm = () => {
    // alert(form.title+" takes "+form.timeToFinish+" to finish.");
    // alert(JSON.stringify(form));
    // fetch("/api/resources", {
    //   body: JSON.stringify(form),
    //   headers: {"Content-Type": "application/json"},
    //   method: "POST"
    // })
    axios.post("/api/resources", form);
  }

  const resetForm = () => setForm(DEFAULT_DATA);

  const handleChange = (e) => {
    // get the name and value properties from event's target
    const { name, value } = e.target;

    setForm({
      ...form, 
      [name]: value
    })
  }

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input 
                      name="title"
                      value={form.title} 
                      onChange={handleChange}
                      className="input" 
                      type="text" 
                      placeholder="e.g. Learn Next Js and Sanity IO" 
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea 
                      name="description"
                      value={form.description} 
                      onChange={handleChange}
                      className="textarea" 
                      placeholder="e.g. Learn these technologies because they're popular and SEO optimised." 
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input 
                      name="link"
                      value={form.link} 
                      onChange={handleChange}
                      className="input" 
                      type="text" 
                      placeholder="e.g. https://udemy.com/ekosup" 
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select 
                        name="priority" 
                        value={form.priority}
                        onChange={handleChange}
                      >
                        <option>Select priority</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input 
                      name="timeToFinish"
                      value={form.timeToFinish} 
                      onChange={handleChange}
                      className="input" 
                      type="number" 
                      placeholder="e.g. 60 (time is in minutes)" 
                    />
                  </div>
                  <p className="help">Time in minutes.</p>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button type="button" onClick={submitForm} className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button type="button" onClick={resetForm} className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResourceCreate;