import React from 'react'

const Dashboard = React.lazy(() => import('../../../views/dashboard/Dashboard'))
const ComptesBancaire = React.lazy(() => import('../../../views/clients/ComptesBancaire'))
const DemandesCours = React.lazy(() => import('../../../views/clients/DemandesCours'))
const HistoriqueClients = React.lazy(() => import('../../../views/clients/HistoriqueClients'))
const ListeClients = React.lazy(() => import('../../../views/clients/ListeClients'))
const ModifierCompte= React.lazy(() => import('../../../views/compte/ModifierCompte'))
const CompteMails= React.lazy(() => import('../../../views/compte/CompteMails'))
const Agents= React.lazy(() => import('../../../views/agents/AgentVerification'))
const PretsAccordes= React.lazy(() => import('../../../views/prets/PretsAccordes'))
const PretsNonAccordes= React.lazy(() => import('../../../views/prets/PretsNonAccordes'))

// Base

const BanquierRoutes = [
    //{ path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/client/liste', name: 'Liste des Clients', element: ListeClients }, 
    { path: '/client/historique', name: 'Historique des Clients', element: HistoriqueClients }, 
    { path: '/client/comptes', name: 'Comptes bancaires', element: ComptesBancaire }, 
    { path: '/client/demandes', name: 'Demandes en cours', element: DemandesCours },
    { path: '/prets/accordes', name: 'Prêts accordés', element: PretsAccordes },
    { path: '/prets/non-accordes', name: 'Prêts non accordés', element: PretsNonAccordes },
    { path: '/agents', name: 'Agents de vérification', element: Agents },
    { path: '/compte/modifier', name: 'Modifier Compte', element: ModifierCompte },
    { path: '/compte/mail', name: 'Consulter e-mails', element: CompteMails },  
]

export default BanquierRoutes
