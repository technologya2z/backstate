package vn.com.pvcombank.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ApiInfoMapperTest {

    private ApiInfoMapper apiInfoMapper;

    @BeforeEach
    public void setUp() {
        apiInfoMapper = new ApiInfoMapperImpl();
    }
}
