import {FaCode, FaDatabase, FaServer, FaTools} from "react-icons/fa";

import AtlAddButton from "../../../components/buttons/AtlAddButton.tsx";
import AtlCardMini from "../../../components/cards/AtlCard.tsx";
import AtlCardCompetences from "../../../components/cards/AtlCardCompetences.tsx";
import AtlRealiser from "../../../components/cards/AtlRealiser.tsx";
import AtlCompetenceSection from "../../../components/cards/AtlCompetenceSection.tsx";
import ProfileCard from "../../../components/cards/ProfileCard.tsx";

export default function UseProfilClients() {
  /*const ctrl = useProfilClientsController();*/

  return (
      <div className="flex justify-center">
        <div className="w-full flex flex-col gap-6 my-10 bg-base-300 p-8 rounded-2xl w-full">
          {/* Bouton d’ajout */}

          <ProfileCard/>
          <AtlAddButton label="Save button" onClick={() => ""}/>

          {/* Zone de saisie tâche */}

          {/* Boutons sociaux */}
          {/*  <div className="flex justify-center gap-4 p-6">
            <AtlSocialButton
                label="GitHub"
                icon={<FaGithub/>}
                color="bg-purple-600"
                hoverColor="hover:bg-purple-700"
                onClick={() => window.open("https://github.com", "_blank")}
            />
            <AtlSocialButton
                label="LinkedIn"
                icon={<FaLinkedin/>}
                color="bg-blue-600"
                hoverColor="hover:bg-blue-700"
                onClick={() => window.open("https://linkedin.com", "_blank")}
            />
            <AtlSocialButton
                label="Contact"
                icon={<FaEnvelope/>}
                color="bg-gray-800"
                hoverColor="hover:bg-gray-900"
                onClick={() => alert("Contactez-nous !")}
            />
          </div>*/}

          {/* Cartes de profil */}
          <div className="flex flex-col gap-10">
            <AtlCardMini
                title="À Propos"
                text={`Ingénieur passionné par le développement d'applications web modernes et performantes. 
                Spécialisé dans la création de solutions full-stack robustes en utilisant les dernières technologies Java et JavaScript. 
                Fort d'une expertise en architecture logicielle, je conçois des applications scalables et maintenables qui répondent aux besoins métier les plus exigeants.`}
            />

            <AtlCardCompetences title="Compétences Techniques">

              <AtlCompetenceSection
                  title="Backend"
                  icon={<FaServer className="text-purple-600 w-5 h-5"/>}
                  skills={["Java", "Spring Boot", "Spring Security", "JPA/Hibernate", "REST API", "Microservices"]}
              />

              <AtlCompetenceSection
                  title="Frontend"
                  icon={<FaCode className="text-purple-600 w-5 h-5"/>}
                  skills={["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS"]}
              />

              <AtlCompetenceSection
                  title="Bases de Données"
                  icon={<FaDatabase className="text-purple-600 w-5 h-5"/>}
                  skills={["PostgreSQL", "MySQL", "MongoDB", "Redis"]}
              />

              <AtlCompetenceSection
                  title="DevOps & Outils"
                  icon={<FaTools className="text-purple-600 w-5 h-5"/>}
                  skills={["Docker", "Git", "CI/CD", "Maven", "Jenkins", "AWS"]}
              />
            </AtlCardCompetences>

            <AtlCardCompetences title={"Projets Réalisés"}>
              <AtlRealiser
                  title="Plateforme E-Commerce"
                  typeDev="Full Stack"
                  description={`Plateforme e-commerce complète avec gestion des utilisateurs, panier d'achat, système de paiement et tableau de bord administrateur. 
                 Architecture microservices pour assurer la scalabilité.`}
              />
            </AtlCardCompetences>

            <AtlCardCompetences title={"Contactez-moi"}>

              <div className="flex flex-col gap-4">
                <input
                    className="input w-full"
                    placeholder="Nom"/>


                <input
                    className="input w-full"
                    placeholder="Email"/>

                <textarea
                    id="message"
                    value={''}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors resize-none"
                />

                <button
                    onClick={() => ""}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Envoyer le message
                </button>

              </div>

            </AtlCardCompetences>


          </div>
        </div>
      </div>
  );
}
