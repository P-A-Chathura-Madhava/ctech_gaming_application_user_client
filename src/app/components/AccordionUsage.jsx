import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage() {

  return (
    <div className="container px-24 mx-auto mt-4">
      <Accordion className="mb-2 bg-black border border-gray-400 rounded-b-lg hover:bg-gray-800">
        <AccordionSummary
          className="text-white"
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What is CTECH?
        </AccordionSummary>
        <AccordionDetails className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          consequatur totam consectetur ea consequuntur sint ducimus facilis
          nisi voluptates, ratione porro amet quaerat cumque et dolor deserunt!
          Minus, accusantium ipsam.
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-2 bg-black border border-gray-400 rounded-b-lg hover:bg-gray-800">
        <AccordionSummary
          className="text-white"
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What is CTECH Gaming
        </AccordionSummary>
        <AccordionDetails className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          deserunt deleniti nihil sint mollitia omnis voluptatum ullam
          exercitationem quia quisquam, impedit, quasi dicta reprehenderit nobis
          praesentium officia laborum optio magni?
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-2 bg-black border border-gray-400 rounded-b-lg hover:bg-gray-800">
        <AccordionSummary
          className="text-white"
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Which Games do we play?
        </AccordionSummary>
        <AccordionDetails className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          deserunt deleniti nihil sint mollitia omnis voluptatum ullam
          exercitationem quia quisquam, impedit, quasi dicta reprehenderit nobis
          praesentium officia laborum optio magni?
        </AccordionDetails>
      </Accordion>
      <Accordion className="mb-2 bg-black border border-gray-400 rounded-b-lg hover:bg-gray-800">
        <AccordionSummary
          className="text-white"
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Where can I watch?
        </AccordionSummary>
        <AccordionDetails className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          deserunt deleniti nihil sint mollitia omnis voluptatum ullam
          exercitationem quia quisquam, impedit, quasi dicta reprehenderit nobis
          praesentium officia laborum optio magni?
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
