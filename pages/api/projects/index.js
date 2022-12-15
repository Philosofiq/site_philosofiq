import { projects } from "../../../data/project-data";
export default function handler(req, res) {
  res.status(200).json(projects);
}
