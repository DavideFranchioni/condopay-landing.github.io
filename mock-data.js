// CondoPay - Mock Data for Dashboard Demo
// Dati di esempio per dimostrazioni e presentazioni

const MOCK_DATA = {
    // Statistiche globali dashboard amministratore
    adminStats: {
        totalCondos: 25,
        totalUnits: 847,
        monthlyVolume: 185000,
        annualVolume: 2220000,
        paymentRate: 94.2,
        defaultRate: 3.1,
        avgPaymentTime: 2.3 // giorni
    },

    // Dati per grafico andamento pagamenti
    paymentTrends: [
        { month: 'Gen', target: 180000, actual: 175000, rate: 97.2 },
        { month: 'Feb', target: 182000, actual: 180500, rate: 99.2 },
        { month: 'Mar', target: 185000, actual: 183200, rate: 99.0 },
        { month: 'Apr', target: 188000, actual: 185600, rate: 98.7 },
        { month: 'Mag', target: 190000, actual: 189200, rate: 99.6 },
        { month: 'Giu', target: 185000, actual: 174500, rate: 94.3 }
    ],

    // Lista condomini gestiti
    condominiums: [
        {
            id: 1,
            name: "Residenza Milano Centro",
            address: "Via Brera 15, Milano",
            units: 45,
            monthlyAmount: 18500,
            paymentRate: 97.8,
            defaultingUnits: 1,
            status: "green"
        },
        {
            id: 2,
            name: "Palazzo Navigli",
            address: "Corso di Porta Ticinese 87, Milano", 
            units: 32,
            monthlyAmount: 12800,
            paymentRate: 100.0,
            defaultingUnits: 0,
            status: "green"
        },
        {
            id: 3,
            name: "Condominio Porta Nuova",
            address: "Via Melchiorre Gioia 22, Milano",
            units: 78,
            monthlyAmount: 31200,
            paymentRate: 89.7,
            defaultingUnits: 8,
            status: "yellow"
        },
        {
            id: 4,
            name: "Residenza Sempione",
            address: "Viale Certosa 45, Milano",
            units: 28,
            monthlyAmount: 9800,
            paymentRate: 92.9,
            defaultingUnits: 2,
            status: "yellow"
        },
        {
            id: 5,
            name: "Palazzo San Siro",
            address: "Via Harar 16, Milano",
            units: 52,
            monthlyAmount: 15600,
            paymentRate: 84.6,
            defaultingUnits: 8,
            status: "red"
        }
    ],

    // Notifiche recenti
    notifications: [
        {
            id: 1,
            type: "payment",
            title: "Pagamento ricevuto",
            message: "Residenza Milano Centro - Apt. 12A ha effettuato il pagamento",
            timestamp: "2025-07-03T10:30:00Z",
            read: false
        },
        {
            id: 2,
            type: "alert",
            title: "Sollecito automatico inviato", 
            message: "3 unità in Palazzo San Siro hanno ricevuto il secondo sollecito",
            timestamp: "2025-07-03T09:15:00Z",
            read: false
        },
        {
            id: 3,
            type: "success",
            title: "Integrazione completata",
            message: "Sincronizzazione Domu Studio completata per 5 condomini",
            timestamp: "2025-07-02T16:45:00Z",
            read: true
        }
    ],

    // Transazioni recenti
    recentTransactions: [
        {
            id: "TXN001",
            condoName: "Residenza Milano Centro",
            unit: "Apt. 12A",
            amount: 245.50,
            date: "2025-07-03",
            status: "completed",
            method: "stripe"
        },
        {
            id: "TXN002", 
            condoName: "Palazzo Navigli",
            unit: "Apt. 3B",
            amount: 180.00,
            date: "2025-07-03",
            status: "completed",
            method: "stripe"
        },
        {
            id: "TXN003",
            condoName: "Condominio Porta Nuova",
            unit: "Apt. 15C",
            amount: 320.75,
            date: "2025-07-02",
            status: "pending",
            method: "bank_transfer"
        }
    ],

    // Dati per comparazione prima/dopo CondoPay
    beforeAfterComparison: {
        before: {
            paymentRate: 78.5,
            avgCollectionTime: 45, // giorni
            manualWorkHours: 12, // ore settimanali per admin
            customerSatisfaction: 6.2,
            defaultRecoveryTime: 180 // giorni
        },
        after: {
            paymentRate: 94.2,
            avgCollectionTime: 2.3, // giorni  
            manualWorkHours: 2, // ore settimanali per admin
            customerSatisfaction: 8.7,
            defaultRecoveryTime: 45 // giorni
        }
    },

    // ROI Calculator per amministratori
    roiCalculator: {
        baseScenario: {
            condos: 10,
            avgUnitsPerCondo: 35,
            avgMonthlyAmountPerUnit: 150,
            currentDefaultRate: 18, // %
            timeToCollect: 180, // giorni
            adminTimePerMonth: 40 // ore
        },
        withCondoPay: {
            monthlyFee: 490, // €49 x 10 condomini
            setupFee: 990, // €99 x 10 condomini (one-time)
            newDefaultRate: 4, // %
            newTimeToCollect: 30, // giorni
            adminTimeSaved: 32 // ore al mese
        }
    },

    // Testimonial fittizi per demo
    testimonials: [
        {
            name: "Dott. Marco Rossi",
            company: "Studio Amministrazioni MR",
            role: "Amministratore Condominiale",
            quote: "CondoPay ha rivoluzionato la gestione dei nostri 15 condomini. La morosità è scesa dal 20% al 4% in soli 6 mesi.",
            rating: 5,
            condosManaged: 15
        },
        {
            name: "Avv. Laura Bianchi", 
            company: "Bianchi & Partners",
            role: "Studio Legale Specializzato",
            quote: "L'automazione del recupero crediti ci ha fatto risparmiare 30 ore al mese. I clienti sono molto più soddisfatti.",
            rating: 5,
            condosManaged: 8
        },
        {
            name: "Sig.ra Elena Verdi",
            company: "Condominio Via Roma 23",
            role: "Condomina",
            quote: "Finalmente posso pagare comodamente online e vedere sempre la mia situazione. Trasparenza totale!",
            rating: 5,
            condosManaged: null
        }
    ],

    // Pricing calculator
    pricingTiers: [
        {
            name: "Starter",
            unitsRange: "10-30",
            monthlyPrice: 29,
            features: [
                "Dashboard base",
                "Pagamenti Stripe", 
                "Notifiche Email",
                "Support via email"
            ]
        },
        {
            name: "Professional", 
            unitsRange: "31-50",
            monthlyPrice: 49,
            features: [
                "Dashboard avanzata",
                "Pagamenti Stripe",
                "Notifiche Email + SMS",
                "Report analytics",
                "Support prioritario"
            ]
        },
        {
            name: "Enterprise",
            unitsRange: "51-100",
            monthlyPrice: 79,
            features: [
                "Dashboard completa",
                "Pagamenti multi-gateway",
                "Notifiche Email + SMS + WhatsApp",
                "Analytics avanzate",
                "API integration",
                "Dedicated support"
            ]
        },
        {
            name: "Premium",
            unitsRange: "100+",
            monthlyPrice: 99,
            features: [
                "Tutte le features Enterprise",
                "Custom integrations",
                "White-label option",
                "24/7 support",
                "Account manager dedicato"
            ]
        }
    ]
};

// Export per uso in altri file JavaScript
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MOCK_DATA;
}

// Global variable per uso in browser
window.CONDOPAY_MOCK_DATA = MOCK_DATA;