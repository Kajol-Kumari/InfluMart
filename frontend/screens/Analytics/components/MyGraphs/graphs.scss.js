const graphStyles = {
  row:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    gap:12,
    justifyContent:"center"
  },
  chartContainer: {
    marginVertical: 20,
    marginHorizontal: 16,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: 320,

  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "medium",
    marginBottom: 10,
  },
  chartValue: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chartDesc: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#637087",
    marginBottom: 15,
  },
};

export default graphStyles