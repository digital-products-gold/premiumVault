
import React, { useState } from 'react';
import { Search, Loader2, ExternalLink, Mail, AlertCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ProductAccess {
    id: string;
    name: string;
    link: string;
}

export const RecoverAccess = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<ProductAccess[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [resendLoading, setResendLoading] = useState<string | null>(null); // productId or null
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const validateEmail = (email: string) => {
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Please enter a valid email.');
            return;
        }

        setLoading(true);
        setError(null);
        setProducts(null);
        setSuccessMessage(null);

        try {
            const response = await fetch(`https://digitalstoregames.pythonanywhere.com/list_products_by_email?email=${email}`);
            if (!response.ok) throw new Error('Erro ao consultar dados');

            const data = await response.json();

            if (!data || data.length === 0) {
                setError('No purchases found for this email.');
            } else {
                // Map the array response to objects: item[0]=id, item[1]=name, item[2]=link
                const mappedProducts = data.map((item: any[]) => ({
                    id: item[0],
                    name: item[1],
                    link: item[2]
                }));
                setProducts(mappedProducts);
            }
        } catch (err) {
            setError('Error connecting to server. Try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResendEmail = async (productId: string) => {
        setResendLoading(productId);
        try {
            const response = await fetch(`https://digitalstoregames.pythonanywhere.com/manualdeliver?productId=${productId}&email=${email}`);
            if (!response.ok) throw new Error('Failed to send');

            setSuccessMessage('Access email resent successfully! Check your inbox and spam.');
            setTimeout(() => setSuccessMessage(null), 5000);
        } catch (err) {
            setError('Error resending email. Try again.');
        } finally {
            setResendLoading(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[100px]" />
            </div>

            <div className="z-10 w-full max-w-2xl">
                <a href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </a>

                <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500" />

                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4 font-heading">
                            Recover Access
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Enter your purchase email to view your products.
                        </p>
                    </div>

                    <form onSubmit={handleSearch} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-heading tracking-wider">
                                YOUR EMAIL
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="exemplo@email.com"
                                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary rounded-xl py-4 text-lg font-bold flex items-center justify-center group"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                                    SEARCHING...
                                </>
                            ) : (
                                <>
                                    CHECK ACCESS
                                    <Search className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Messages */}
                    {error && (
                        <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start text-red-200 animate-in fade-in slide-in-from-top-2">
                            <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    {successMessage && (
                        <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start text-green-200 animate-in fade-in slide-in-from-top-2">
                            <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                            <span>{successMessage}</span>
                        </div>
                    )}

                    {/* Results List */}
                    {products && products.length > 0 && (
                        <div className="mt-10 animate-in fade-in slide-in-from-bottom-4">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                                Products Found ({products.length})
                            </h3>

                            <div className="space-y-3">
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="group bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl p-4 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4"
                                    >
                                        <div className="font-medium text-lg text-white w-full sm:w-auto overflow-hidden text-ellipsis whitespace-nowrap px-2">
                                            {product.name}
                                        </div>

                                        <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
                                            <a
                                                href={product.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white transition-all duration-300 border border-blue-500/30 hover:border-blue-500"
                                                title="Access Content"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>

                                            <button
                                                onClick={() => handleResendEmail(product.id)}
                                                disabled={resendLoading === product.id}
                                                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                                                title="Resend Email"
                                            >
                                                {resendLoading === product.id ? (
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    <Mail className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
