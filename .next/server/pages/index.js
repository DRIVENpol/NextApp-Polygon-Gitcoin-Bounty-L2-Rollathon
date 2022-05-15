"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/NETSY-WHITE.9e37ebca.png","height":340,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAPklEQVR42gEzAMz/AP5P/oL+ef50/oj+mv5x/mQA/rH+z/6H/nH+P/6V/rn+pwD+Sv5h/mD+Q/4S/lH+cP4/j2UikrSPww0AAAAASUVORK5CYII="});

/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./Utils/Networks.js
const networkParams = {
    "0x63564c40": {
        chainId: "0x63564c40",
        rpcUrls: [
            "https://api.harmony.one"
        ],
        chainName: "Harmony Mainnet",
        nativeCurrency: {
            name: "ONE",
            decimals: 18,
            symbol: "ONE"
        },
        blockExplorerUrls: [
            "https://explorer.harmony.one"
        ],
        iconUrls: [
            "https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"
        ]
    },
    "0xa4ec": {
        chainId: "0xa4ec",
        rpcUrls: [
            "https://forno.celo.org"
        ],
        chainName: "Celo Mainnet",
        nativeCurrency: {
            name: "CELO",
            decimals: 18,
            symbol: "CELO"
        },
        blockExplorerUrl: [
            "https://explorer.celo.org"
        ],
        iconUrls: [
            "https://celo.org/images/marketplace-icons/icon-celo-CELO-color-f.svg"
        ]
    }
};

;// CONCATENATED MODULE: ./Utils/Utils.js
const truncateAddress = (address)=>{
    if (!address) return "No Account";
    const match = address.match(/^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
};
const toHex = (num)=>{
    const val = Number(num);
    return "0x" + val.toString(16);
};

;// CONCATENATED MODULE: external "ethers"
const external_ethers_namespaceObject = require("ethers");
;// CONCATENATED MODULE: external "web3modal"
const external_web3modal_namespaceObject = require("web3modal");
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_namespaceObject);
;// CONCATENATED MODULE: external "@walletconnect/web3-provider"
const web3_provider_namespaceObject = require("@walletconnect/web3-provider");
var web3_provider_default = /*#__PURE__*/__webpack_require__.n(web3_provider_namespaceObject);
;// CONCATENATED MODULE: ./Utils/providerOptions.js

const providerOptions = {
    walletconnect: {
        package: (web3_provider_default()),
        options: {
            infuraId: "3be75b2217884d8d85a91da35b3b7a4f" // required
        }
    }
};

// EXTERNAL MODULE: ./Images/NETSY-WHITE.png
var NETSY_WHITE = __webpack_require__(527);
;// CONCATENATED MODULE: ./pages/index.js











function Home({ avatars  }) {
    const { 0: provider1 , 1: setProvider  } = (0,external_react_.useState)();
    const { 0: library1 , 1: setLibrary  } = (0,external_react_.useState)();
    const { 0: account , 1: setAccount  } = (0,external_react_.useState)();
    const { 0: signature1 , 1: setSignature  } = (0,external_react_.useState)("");
    const { 0: error1 , 1: setError  } = (0,external_react_.useState)("");
    const { 0: chainId , 1: setChainId  } = (0,external_react_.useState)();
    const { 0: network1 , 1: setNetwork  } = (0,external_react_.useState)();
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: signedMessage , 1: setSignedMessage  } = (0,external_react_.useState)("");
    const { 0: verified , 1: setVerified  } = (0,external_react_.useState)();
    const connectWallet = async ()=>{
        if (false) {}
    };
    const handleNetwork = (e)=>{
        const id = e.target.value;
        setNetwork(Number(id));
    };
    const handleInput = (e)=>{
        const msg = e.target.value;
        setMessage(msg);
    };
    const switchNetwork = async ()=>{
        try {
            await library1.provider.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: toHex(network1)
                    }
                ]
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    await library1.provider.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            networkParams[toHex(network1)]
                        ]
                    });
                } catch (error) {
                    setError(error);
                }
            }
        }
    };
    const signMessage = async ()=>{
        if (!library1) return;
        try {
            const signature = await library1.provider.request({
                method: "personal_sign",
                params: [
                    message,
                    account
                ]
            });
            setSignedMessage(message);
            setSignature(signature);
        } catch (error) {
            setError(error);
        }
    };
    const verifyMessage = async ()=>{
        if (!library1) return;
        try {
            const verify = await library1.provider.request({
                method: "personal_ecRecover",
                params: [
                    signedMessage,
                    signature1
                ]
            });
            setVerified(verify === account.toLowerCase());
        } catch (error) {
            setError(error);
        }
    };
    const refreshState = ()=>{
        setAccount();
        setChainId();
        setNetwork("");
        setMessage("");
        setSignature("");
        setVerified(undefined);
    };
    const disconnect = async ()=>{
        const web3Modal = new (external_web3modal_default())({
            cacheProvider: true,
            providerOptions: providerOptions
        });
        await web3Modal.clearCachedProvider();
        refreshState();
    };
    (0,external_react_.useEffect)(()=>{
        const web3Modal = new (external_web3modal_default())({
            cacheProvider: true,
            providerOptions: providerOptions
        });
        if (web3Modal.cachedProvider) {
            connectWallet();
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (provider1?.on) {
            const handleAccountsChanged = (accounts)=>{
                console.log("accountsChanged", accounts);
                if (accounts) setAccount(accounts[0]);
            };
            const handleChainChanged = (_hexChainId)=>{
                setChainId(_hexChainId);
            };
            const handleDisconnect = ()=>{
                console.log("disconnect", error1);
                disconnect();
            };
            provider1.on("accountsChanged", handleAccountsChanged);
            provider1.on("chainChanged", handleChainChanged);
            provider1.on("disconnect", handleDisconnect);
            return ()=>{
                if (provider1.removeListener) {
                    provider1.removeListener("accountsChanged", handleAccountsChanged);
                    provider1.removeListener("chainChanged", handleChainChanged);
                    provider1.removeListener("disconnect", handleDisconnect);
                }
            };
        }
    }, [
        provider1
    ]);
    (0,external_react_.useEffect)(()=>{
        setProvider(new external_ethers_namespaceObject.ethers.providers.Web3Provider(window.ethereum));
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    bg: "#278bff",
                    w: "100%",
                    p: 6,
                    color: "white",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        templateColumns: "repeat(3, 1fr)",
                        gap: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                w: "100%",
                                h: "10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                        src: NETSY_WHITE/* default.src */.Z.src,
                                        alt: "",
                                        maxWidth: "120px"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                w: "100%",
                                h: "10"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                w: "100%",
                                h: "10",
                                align: "center",
                                children: account ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    colorScheme: "gray",
                                    textColor: "black",
                                    mr: [
                                        "-5%",
                                        "-10%",
                                        "-30%",
                                        "-50%",
                                        "-60%"
                                    ],
                                    onClick: disconnect,
                                    children: "Disconnect"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    colorScheme: "gray",
                                    textColor: "black",
                                    mr: [
                                        "-5%",
                                        "-10%",
                                        "-30%",
                                        "-50%",
                                        "-60%"
                                    ],
                                    onClick: connectWallet,
                                    children: "Connect your wallet"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                maxW: "3xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    as: react_.Box,
                    textAlign: "center",
                    spacing: {
                        base: 8,
                        md: 14
                    },
                    py: {
                        base: 20,
                        md: 36
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Heading, {
                            fontWeight: 600,
                            fontSize: {
                                base: "2xl",
                                sm: "4xl",
                                md: "6xl"
                            },
                            lineHeight: "110%",
                            children: [
                                "Welcome to Nexis! ",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    as: "span",
                                    color: "#278bff",
                                    children: "A decentralized space for creators and their audience!"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            color: "gray.500",
                            children: "Monetize your content by receiveing claps and donations from your most loyal readers and reward their loyalty with special NFTS."
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                bg: "#278bff",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                    maxW: "100%",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        as: react_.Box,
                        textAlign: "center",
                        spacing: {
                            base: 8,
                            md: 14
                        },
                        py: {
                            base: 20,
                            md: 36
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Heading, {
                                fontWeight: 600,
                                fontSize: {
                                    base: "2xl",
                                    sm: "4xl",
                                    md: "6xl"
                                },
                                lineHeight: "110%",
                                color: "white",
                                children: [
                                    "Discover Netsy Choices",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                color: "white",
                                children: "A currated list of our best creators"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                    color: "white",
                                    templateColumns: [
                                        "repeat(1, 1fr)",
                                        null,
                                        "repeat(2, 1fr)",
                                        "repeat(3, 1fr)",
                                        "repeat(4, 1fr)",
                                        "repeat(5, 1fr)"
                                    ],
                                    gap: 6,
                                    w: "75%",
                                    mb: "6px",
                                    children: avatars && avatars.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                                w: "100%",
                                                h: "10",
                                                align: "center",
                                                mb: "150px",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                                    maxW: "sm",
                                                    alignContent: "center",
                                                    color: "white",
                                                    bg: "#131313",
                                                    borderRadius: "10px",
                                                    p: "2px",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                                                            direction: "row",
                                                            alignItems: "center",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                                mt: "5%",
                                                                ml: "2%",
                                                                src: project.photoUrl
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                                            direction: "column",
                                                            ml: "4%",
                                                            mb: "5%",
                                                            mt: "5%",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                                    align: "left",
                                                                    fontSize: "14px",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                            children: "Username: "
                                                                        }),
                                                                        project.name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                                    align: "left",
                                                                    fontSize: "14px",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                            children: "Total Claps: "
                                                                        }),
                                                                        project.enemies
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                                                                    direction: "row",
                                                                    ml: "2%",
                                                                    mb: "5%",
                                                                    mt: "5%",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                                        variant: "solid",
                                                                        bgGradient: "linear(to-l, #7928CA, #FF0080)",
                                                                        color: "white",
                                                                        w: "50%",
                                                                        size: "sm",
                                                                        mr: 1,
                                                                        _hover: {
                                                                            bg: "white",
                                                                            color: "black"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                                            href: "/channels/" + project._id,
                                                                            children: "View Channel"
                                                                        }, project._id)
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, project._id)
                                    )
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    color: "white",
                                    children: "In order to be able to register as a creator or to unlock the full potential of this DAPP, please connect your wallet."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    colorScheme: "gray",
                                    textColor: "black",
                                    maxW: "50%",
                                    mt: "-20px",
                                    children: "Connect your wallet"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                align: "bottom",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    bg: "#1f1f1f",
                    w: "100%",
                    p: 4,
                    color: "white",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            children: [
                                "DAPP created by ",
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                    href: "https://twitter.com/polthedev",
                                    isExternal: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "@PolTheDev"
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
async function getStaticProps() {
    const avatars = await fetch("https://last-airbender-api.herokuapp.com/api/v1/characters").then((r)=>r.json()
    );
    return {
        props: {
            avatars
        }
    };
}


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(110));
module.exports = __webpack_exports__;

})();