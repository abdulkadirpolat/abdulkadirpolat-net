import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Card } from "../../components/index";

const Projects = () => {
  const [github, setGithub] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await axios
        .get(
          "https://api.github.com/users/abdulkadirpolat/repos?page=1&per_page=100"
        )
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
      setGithub(res.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <div
          className="w-full min-h-screen -mt-20 flex items-center justify-center 
          mx-auto max-w-7xl pr-10 font-serif"
        >
          <div className="animate-spin rounded-full h-28 w-28 border-b-4 border-dark-purple"></div>
        </div>
      ) : (
        <div className="min-h-screen w-full py-10">
          <ul className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 w-full gap-5">
            {github.map((repo) => (
              <Card key={repo.id} data={repo} />
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default Projects;
