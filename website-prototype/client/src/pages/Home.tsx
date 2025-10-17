import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Network, Zap, Lock, Server, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-icon.png" alt="Netz Informatique" className="h-10 w-10" />
            <span className="text-xl font-semibold text-primary">NETZ INFORMATIQUE</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">À propos</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">Demander un devis</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Solutions IT pour votre entreprise
              </h1>
              <p className="text-lg text-muted-foreground">
                Nous fournissons des solutions informatiques innovantes pour aider votre entreprise à prospérer dans l'ère numérique. Sécurité, rapidité et fiabilité garanties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Commencer
                </Button>
                <Button size="lg" variant="outline">
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
              <img src="/logo-icon.png" alt="Network" className="relative w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins informatiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Cybersécurité</CardTitle>
                <CardDescription>
                  Protection avancée contre les menaces numériques et sécurisation de vos données
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Infrastructure Réseau</CardTitle>
                <CardDescription>
                  Conception et gestion de réseaux performants et sécurisés
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Cloud Computing</CardTitle>
                <CardDescription>
                  Migration et gestion de vos services dans le cloud
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Maintenance IT</CardTitle>
                <CardDescription>
                  Support technique et maintenance préventive de vos systèmes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Audit de Sécurité</CardTitle>
                <CardDescription>
                  Analyse approfondie de votre infrastructure pour identifier les vulnérabilités
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Solutions Rapides</CardTitle>
                <CardDescription>
                  Intervention rapide et efficace pour résoudre vos problèmes IT
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/logo.png" alt="Netz Informatique" className="w-full max-w-lg mx-auto" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">À propos de Netz Informatique</h2>
              <p className="text-lg text-muted-foreground">
                Avec plus de 20 ans d'expérience dans le domaine des technologies de l'information, Netz Informatique est votre partenaire de confiance pour tous vos besoins IT.
              </p>
              <p className="text-lg text-muted-foreground">
                Notre équipe d'experts certifiés vous accompagne dans la transformation numérique de votre entreprise, en vous offrant des solutions sur mesure, fiables et innovantes.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">20+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Support technique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à transformer votre infrastructure IT ?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contactez-nous
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contactez-nous</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nous sommes là pour répondre à toutes vos questions
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>contact@netzinformatique.fr</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Téléphone</CardTitle>
                  <CardDescription>+33 1 23 45 67 89</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Adresse</CardTitle>
                  <CardDescription>Paris, Île-de-France</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="Netz Informatique" className="h-8 w-8" />
              <span className="text-sm text-muted-foreground">© 2025 Netz Informatique. Tous droits réservés.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Mentions légales</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Confidentialité</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

