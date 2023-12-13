import { getData } from "./passData.js";
import { renderDetails } from "./render.js";
import { loadDetails } from "./topics.js";
let id = getData("id")
let topic = {}
topic = await loadDetails(id)
if (topic) renderDetails(topic)