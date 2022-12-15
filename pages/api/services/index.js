import { services } from "../../../data/service-data";

export default function handler(req, res) {
  res.status(200).json(services);
}
