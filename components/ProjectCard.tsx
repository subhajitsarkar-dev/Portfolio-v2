import { ProjectInfo } from "@/lib/projectDetails";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProjectCard = ({ data }: { data: ProjectInfo }) => {
  return (
    <>
      <Card className="border duration-300 hover:bg-gray-100">
        <CardHeader>
          <CardTitle className="font-mono text-3xl">{data.title}</CardTitle>
          <CardDescription className="w-full">
            <p className="font-popy">{data.descriptions}</p>
          </CardDescription>
          <CardAction>
            <Badge variant={"outline"}>{data.badge}</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <h1 className="font-popy">TechStack: {data.techStack}</h1>
        </CardContent>
        <CardFooter className="flex gap-3 items-center w-full">
          <Link href={data.github} className="w-1/2">
            <Button className="w-full font-popy cursor-pointer">
              Github <FaGithub className="ml-2" />
            </Button>
          </Link>
          <Link href={data.liveDemo} className="w-1/2">
            <Button className="w-full font-popy cursor-pointer">
              Live <SquareArrowOutUpRight className="ml-2" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCard;
